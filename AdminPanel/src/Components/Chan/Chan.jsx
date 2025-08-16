import { useState } from "react";
import './Chan.css';

const Chan = () => {
    const [ticket, setTicket] = useState({
        Name: "", 
        Phone: "", 
        Payment: "", 
        Category: "", 
        Amount: 0, 
        Quantity: 1
    });
    const [list, setList] = useState([]);
    const [showGoonModal, setShowGoonModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation function
    const validateForm = () => {
        const newErrors = {};
        
        if (!ticket.Name.trim()) {
            newErrors.Name = "Name is required";
        }
        
        if (!ticket.Phone.trim()) {
            newErrors.Phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(ticket.Phone.replace(/\s/g, ""))) {
            newErrors.Phone = "Please enter a valid 10-digit phone number";
        }
        
        if (!ticket.Category || ticket.Category === "Choose Category") {
            newErrors.Category = "Please select a ticket category";
        }
        
        if (!ticket.Amount || ticket.Amount === 0) {
            newErrors.Amount = "Please select a price";
        }
        
        if (!ticket.Payment) {
            newErrors.Payment = "Please select a payment method";
        }
        
        if (ticket.Quantity < 1) {
            newErrors.Quantity = "Quantity must be at least 1";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleName = (e) => {
        setTicket(t => ({...t, Name: e.target.value}));
        if (errors.Name) {
            setErrors(prev => ({...prev, Name: ""}));
        }
    };

    const handlePhoneNumber = (e) => {
        const value = e.target.value;
        setTicket(t => ({...t, Phone: value}));
        if (errors.Phone) {
            setErrors(prev => ({...prev, Phone: ""}));
        }
    };

    const handleTicket = (e) => {
        const category = e.target.value;
        let amount = 0;
        
        // Auto-set price based on category
        if (category === "VVIP") amount = "Sh8000";
        else if (category === "VIP") amount = "Sh5000";
        else if (category === "REGULAR") amount = "Sh1000";
        
        setTicket(t => ({...t, Category: category, Amount: amount}));
        if (errors.Category) {
            setErrors(prev => ({...prev, Category: ""}));
        }
    };

    const handlePrice = (e) => {
        setTicket(t => ({...t, Amount: e.target.value}));
        if (errors.Amount) {
            setErrors(prev => ({...prev, Amount: ""}));
        }
    };

    const handleTicketNumber = (e) => {
        const quantity = parseInt(e.target.value) || 0;
        
        if (quantity > 3) {
            setShowGoonModal(true);
            return;
        }
        
        setTicket(t => ({...t, Quantity: quantity}));
        if (errors.Quantity) {
            setErrors(prev => ({...prev, Quantity: ""}));
        }
    };

    const handlePaymentOption = (e) => {
        setTicket(t => ({...t, Payment: e.target.value}));
        if (errors.Payment) {
            setErrors(prev => ({...prev, Payment: ""}));
        }
    };

    const handlePay = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const newTicket = {
            Name: ticket.Name,
            Phone: ticket.Phone,
            Payment: ticket.Payment,
            Category: ticket.Category,
            Amount: ticket.Amount,
            Quantity: ticket.Quantity,
            Id: Date.now(),
            BookingTime: new Date().toLocaleString()
        };

        // Simulate API call delay
        setTimeout(() => {
            setList(t => [...t, newTicket]);
            setTicket({Name: "", Phone: "", Payment: "", Category: "", Amount: 0, Quantity: 1});
            setIsSubmitting(false);
            alert("🎫 Ticket booked successfully! Check your email for confirmation.");
        }, 1000);
    };

    const remove = (index) => {
        if (window.confirm("Are you sure you want to remove this ticket?")) {
            setList(t => t.filter((_, i) => i !== index));
        }
    };

    const handleGoonConfirm = () => {
        setTicket(t => ({...t, Quantity: 3}));
        setShowGoonModal(false);
    };

    const handleGoonCancel = () => {
        setShowGoonModal(false);
    };

    const getTotalPrice = () => {
        const price = parseInt(ticket.Amount.replace(/[^\d]/g, "")) || 0;
        return price * ticket.Quantity;
    };

    return (
        <div className="app-container">
            {/* Goon Modal */}
            {showGoonModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2 className="modal-title">⚠️ Security Check</h2>
                        <p className="modal-text">
                            You're trying to buy more than 3 tickets. 
                            Are you sure you're not a goon trying to resell tickets?
                        </p>
                        <div className="modal-buttons">
                            <button onClick={handleGoonCancel} className="cancel-btn">
                                I'm a Goon 😅
                            </button>
                            <button onClick={handleGoonConfirm} className="confirm-btn">
                                I'm Genuine! 
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="chan-container">
                <div className="chan">
                    <div className="header">
                        <h1 className="title">🏆 CHAN2024</h1>
                        <div className="match-info">
                            <h2>🎫 Match Tickets</h2>
                            <h2>📍 Venue: Kasarani Stadium</h2>
                            <h2>⚽ Match: Kenya 🇰🇪 vs Morocco 🇲🇦</h2>
                            <h2>⏰ Time: 1700Hrs</h2>
                        </div>
                    </div>

                    <div className="chan-content">
                        <h1 className="content-title">Get your tickets now and cheer up your favourite team! 🎉</h1>
                        <div className="rules">
                            <h3>📋 Booking Rules:</h3>
                            <ul>
                                <li>✅ Tickets are sold one person at a time</li>
                                <li>🎫 Maximum 3 tickets per person</li>
                                <li>🚫 Let's avoid violence and enjoy the game!</li>
                            </ul>
                        </div>
                    </div>

                    <div className="chan-input">
                        <div className="input-group">
                            <label className="label">👤 Full Name</label>
                            <input 
                                onChange={handleName} 
                                value={ticket.Name} 
                                type="text" 
                                placeholder="Enter your full name..." 
                                className={`input ${errors.Name ? 'error-input' : ''}`}
                            />
                            {errors.Name && <span className="error-text">{errors.Name}</span>}
                        </div>

                        <div className="input-group">
                            <label className="label">📱 Phone Number</label>
                            <input 
                                onChange={handlePhoneNumber} 
                                value={ticket.Phone} 
                                type="tel" 
                                placeholder="0712345678" 
                                className={`input ${errors.Phone ? 'error-input' : ''}`}
                            />
                            {errors.Phone && <span className="error-text">{errors.Phone}</span>}
                        </div>

                        <div className="input-group">
                            <label className="label">🎫 Ticket Category</label>
                            <select 
                                onChange={handleTicket} 
                                value={ticket.Category} 
                                className={`select ${errors.Category ? 'error-input' : ''}`}
                            >
                                <option value="">Choose Category</option>
                                <option value="VVIP">💎 VVIP - Sh8000</option>
                                <option value="VIP">⭐ VIP - Sh5000</option>
                                <option value="REGULAR">🎪 Regular - Sh1000</option>
                            </select>
                            {errors.Category && <span className="error-text">{errors.Category}</span>}
                        </div>

                        <div className="input-group">
                            <label className="label">💰 Price Per Ticket</label>
                            <select 
                                onChange={handlePrice} 
                                value={ticket.Amount} 
                                className="select"
                                disabled={!ticket.Category}
                            >
                                <option value="Sh8000">Sh8000 (VVIP)</option>
                                <option value="Sh5000">Sh5000 (VIP)</option>
                                <option value="Sh1000">Sh1000 (Regular)</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="label">🔢 Ticket Quantity</label>
                            <input 
                                onChange={handleTicketNumber} 
                                value={ticket.Quantity} 
                                type="number" 
                                min="1" 
                                max="3"
                                className={`input ${errors.Quantity ? 'error-input' : ''}`}
                            />
                            {errors.Quantity && <span className="error-text">{errors.Quantity}</span>}
                        </div>

                        <div className="input-group">
                            <label className="label">💳 Payment Method</label>
                            <div className="radio-group">
                                {["Mpesa", "Airtel", "Card"].map((method) => (
                                    <label key={method} className="radio-label">
                                        <input  
                                            onChange={handlePaymentOption} 
                                            value={method} 
                                            checked={ticket.Payment === method} 
                                            type="radio"  
                                            name="payment" 
                                            className="radio"
                                        />
                                        <span className="radio-text">
                                            {method === "Mpesa" && "📱"} 
                                            {method === "Airtel" && "📞"} 
                                            {method === "Card" && "💳"} {method}
                                        </span>
                                    </label>
                                ))}
                            </div>
                            {errors.Payment && <span className="error-text">{errors.Payment}</span>}
                        </div>

                        {ticket.Quantity > 0 && ticket.Amount && (
                            <div className="total-section">
                                <h3 className="total-text">
                                    💵 Total: Sh{getTotalPrice().toLocaleString()} 
                                    ({ticket.Quantity} × {ticket.Amount})
                                </h3>
                            </div>
                        )}

                        <div className="last-content">
                            <button 
                                onClick={handlePay}
                                disabled={isSubmitting}
                                className={`pay-button ${isSubmitting ? 'pay-button-disabled' : ''}`}
                            >
                                {isSubmitting ? "⏳ Processing..." : "💳 Pay Now"}
                            </button>
                            
                            <div className="instructions">
                                <h4>📝 Important Instructions:</h4>
                                <ul className="instructions-list">
                                    <li>🕐 Be at the gate 1 hour before game starts</li>
                                    <li>📱 Present your QR code at the gate</li>
                                    <li>🎫 Only ticket holders allowed in stadium</li>                
                                    <li>🏟️ FansZone available for non-ticket holders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="output">
                    <h2 className="output-title">🎫 Your Bookings</h2>
                    {list.length === 0 ? (
                        <p className="no-tickets">📭 No tickets booked yet!</p>
                    ) : (
                        <div>
                            {list.map((record, index) => (
                                <div key={record.Id} className="ticket-card">
                                    <div className="ticket-header">
                                        <span className="ticket-id">Ticket #{record.Id}</span>
                                        <button 
                                            onClick={() => remove(index)}
                                            className="remove-btn"
                                            title="Remove ticket"
                                        >
                                            ❌
                                        </button>
                                    </div>
                                    <div className="ticket-details">
                                        <div><strong>👤 Name:</strong> {record.Name}</div>
                                        <div><strong>📱 Phone:</strong> {record.Phone}</div>
                                        <div><strong>💳 Payment:</strong> {record.Payment}</div>
                                        <div><strong>🎫 Category:</strong> {record.Category}</div>
                                        <div><strong>💰 Price:</strong> {record.Amount}</div>
                                        <div><strong>🔢 Quantity:</strong> {record.Quantity}</div>
                                        <div className="booking-time">
                                            <strong>📅 Booked:</strong> {record.BookingTime}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <p className="copy">Designed By <span>Lokoops</span></p>
            </div>
            
        </div>
    );
};

export default Chan;