import { useState } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Language options
    const languages = [
        { code: "en", label: "English" },
        { code: "ar", label: "عربي" },
    ];

    // Get current language from pathname (assuming locale in URL)
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    return (
        <div className="relative">
            {/* Button to toggle dropdown */}
            <button
                title="Language"
                type="button"
                className="hover:scale-105 transition-all duration-300 flex items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Icon icon="solar:global-outline" width="25" height="25" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute ltr:right-0 rtl:left-0 mt-2 w-28 bg-white shadow-lg rounded-lg border border-gray-200">
                    {languages.map((lang) => (
                        <Link
                            key={lang.code}
                            href={pathname.replace(/^\/(en|ar)/, `/${lang.code}`)}
                            locale={lang.code}
                            className={`block px-4 py-2 text-sm ${currentLang === lang.code ? "text-red-400 font-semibold" : "text-gray-900"
                                } hover:bg-gray-100 hover:rounded-lg`}
                            onClick={() => setIsOpen(false)}
                        >
                            {lang.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
