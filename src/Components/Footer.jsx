import React from 'react'

const Footer = () => {
  return (
    <>
        <div>
          <footer className="bg-slate-900 text-white py-10 px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-1 gap-10">
                
                {/* Company Info */}
                <div>
                <h2 className="text-2xl font-bold mb-4">FocusZen</h2>
                <p className="text-sm text-slate-300">
                    Helping you stay focused, productive, and in control of your time and goals.
                </p>
                </div>

                {/* Quick Links */}
                <div>
                <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Features</a></li>
                    <li><a href="#" className="hover:underline">Pricing</a></li>
                    <li><a href="#" className="hover:underline">Testimonials</a></li>
                </ul>
                </div>

                {/* Resources */}
                <div>
                <h3 className="text-xl font-semibold mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:underline">Blog</a></li>
                    <li><a href="#" className="hover:underline">Help Center</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms of Service</a></li>
                </ul>
                </div>

                {/* Contact & Newsletter */}
                <div>
                <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
                <p className="text-sm text-slate-300 mb-2">Subscribe to our newsletter</p>
                <form className="flex gap-2">
                    <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-1 rounded-md text-white w-full border"
                    />
                    <button
                    type="submit"
                    className="bg-amber-400 text-black px-4 py-1 rounded-md hover:bg-amber-500"
                    >
                    Subscribe
                    </button>
                </form>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="text-center mt-10 text-xs text-slate-400">
                &copy; {new Date().getFullYear()} FocusZen. By DEcipher_!T. All rights reserved.
            </div>
            </footer>
        </div>
    </>
  )
}

export default Footer