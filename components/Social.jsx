import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/NonimUdara", textColor: "text-white hover:text-black" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com", textColor: "text-blue-700" },
    { icon: <FaYoutube />, path: "https://youtube.com", textColor: "text-red-600" },
    { icon: <FaTwitter />, path: "https://twitter.com", textColor: "text-blue-400" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        href={item.path}
                        key={index}
                        className={`${iconStyles} ${item.textColor}`}
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
