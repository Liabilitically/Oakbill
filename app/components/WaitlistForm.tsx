'use client';
import React from 'react';
import { db } from '../apis/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from "react";

const WaitlistForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState<string>('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!email) return

        try {
            await addDoc(collection(db, 'waitlist'), {
                email,
                timestamp: serverTimestamp(),
            })
            setSubmitted(true)
        } catch (err) {
            console.error('Error submitting email:', err)
            alert('Something went wrong. Try again later.')
        }
    }

    return (
        <div className="card bg-base-100 shadow-sm md:w-3xl w-md text-center py-3">
            { submitted ? (
                <div className="card-body text-center">
                    <div className='flex flex-col items-center gap-5'>
                        <span className="material-symbols-outlined text-success select-none" style={{ fontSize: '3rem' }}>check_circle</span>
                        <h2 className="card-title text-4xl font-bold justify-center">Thanks for joining the waitlist!</h2>
                    </div>
                    <p className="text-info mt-6 space-y-4">
                        <p>
                            We'll let you know as soon as OakBill is ready. No spam, no corporate fluff — just a heads up when you can start creating clean, simple invoices that actually get paid.
                        </p>
                        <p>
                            Keep doing great work,<br />
                            The OakBill team
                        </p>
                    </p>
                </div>
            ) : (
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold justify-center">Join the early makers</h2>
                    <p className="text-info mt-3">
                        Be among the first to experience invoicing that doesn't feel like work. We're crafting something special, and we'd love to have you along for the journey
                    </p>
                    <form className="flex justify-center gap-3 mt-6" onSubmit={handleSubmit}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-info validator placeholder:text-info text-info px-2" required placeholder="Email" pattern="^([a-zA-Z0-9_\-\.+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" />
                        <button className="btn btn-accent rounded-lg shadow-sm hover:scale-102 hover:shadow-md hover:bg-accent transition-transform duration-200 ease-in-out" type="submit">Reserve my spot</button>
                    </form>
                    <p className="text-info text-xs mt-2">
                        No spam, just updates on our progress.
                    </p>
                </div>
            )}
        </div>
    )
}

export default WaitlistForm