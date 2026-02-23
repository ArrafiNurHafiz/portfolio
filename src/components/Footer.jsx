const Footer = () => {
    return (
        <footer className="bg-dark py-8 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} <span className="text-slate-200 font-medium">Arrafi Nur Hafiz</span>. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-slate-500 hover:text-accent transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-slate-500 hover:text-accent transition-colors text-sm">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
