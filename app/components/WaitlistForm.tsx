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
        <div className="card bg-base-100 shadow-sm text-center py-3 px-4">
            { submitted ? (
                <div className="card-body text-center">
                    <div className='flex flex-col items-center gap-5'>
                        <span className="material-symbols-outlined text-success select-none" style={{ fontSize: '3rem' }}>check_circle</span>
                        <h2 className="card-title md:text-4xl text-3xl font-bold justify-center">Thanks for joining the waitlist!</h2>
                    </div>
                    <p className="text-info mt-6 md:space-y-4 space-y-7">
                        <p>
                            We&rsquo;ll let you know as soon as OakBill is ready. You can soon start creating clean, simple invoices that actually get paid.
                        </p>
                        <p>
                            Keep doing great work,<br />
                            The OakBill team
                        </p>
                    </p>
                </div>
            ) : (
                <div className="card-body">
                    <h2 className="card-title md:text-4xl text-3xl font-bold justify-center dark:text-base-content">Join the early makers</h2>
                    <p className="text-info mt-3 md:text-md text-sm md:max-w-3xl">
                        Be among the first to experience invoicing that doesn&rsquo;t feel like work. We&rsquo;re crafting something special, and we&rsquo;d love to have you along for the journey. <br/><br/>Also, waitlist members get early access to our founder&rsquo;s pricing.
                    </p>
                    <form className="flex md:flex-row flex-col justify-center gap-3 mt-6" onSubmit={handleSubmit}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-info validator placeholder:text-info text-info px-4 md:w-fit w-full" required placeholder="Email" pattern="^([a-zA-Z0-9_\-\.+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" />
                        <button className="btn btn-accent md:w-fit w-full rounded-lg shadow-sm hover:scale-102 hover:shadow-md hover:bg-accent transition-transform duration-200 ease-in-out" type="submit">Reserve my spot</button>
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