export function DeveloperIllustration() {
  return (
    <div className="floating-animation">
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-80 h-80"
      >
        {/* Background circle */}
        <circle cx="160" cy="160" r="140" fill="hsl(var(--muted))" opacity="0.3" />
        
        {/* Developer body */}
        <ellipse cx="160" cy="220" rx="60" ry="80" fill="hsl(var(--primary))" />
        
        {/* Developer head */}
        <circle cx="160" cy="120" r="35" fill="#FDBCB4" />
        
        {/* Hair */}
        <path
          d="M125 105 C125 85, 145 75, 160 75 C175 75, 195 85, 195 105 C195 95, 185 90, 160 90 C135 90, 125 95, 125 105"
          fill="#2C1810"
        />
        
        {/* Eyes */}
        <circle cx="150" cy="115" r="3" fill="#2C1810" />
        <circle cx="170" cy="115" r="3" fill="#2C1810" />
        
        {/* Laptop */}
        <rect x="130" y="180" width="60" height="40" rx="4" fill="#E5E7EB" className="dark:fill-gray-800" />
        <rect x="135" y="185" width="50" height="30" fill="#1F2937" />
        
        {/* Laptop screen glow */}
        <rect x="137" y="187" width="46" height="26" fill="hsl(var(--primary))" opacity="0.3" />
        
        {/* Code lines on screen */}
        <rect x="140" y="190" width="20" height="2" fill="hsl(var(--primary))" />
        <rect x="140" y="195" width="30" height="2" fill="#10B981" />
        <rect x="140" y="200" width="25" height="2" fill="#F59E0B" />
        <rect x="140" y="205" width="35" height="2" fill="#8B5CF6" />
        
        {/* Arms */}
        <ellipse cx="120" cy="200" rx="15" ry="30" fill="#FDBCB4" transform="rotate(-15 120 200)" />
        <ellipse cx="200" cy="200" rx="15" ry="30" fill="#FDBCB4" transform="rotate(15 200 200)" />
        
        {/* Hands on keyboard */}
        <circle cx="110" cy="220" r="8" fill="#FDBCB4" />
        <circle cx="210" cy="220" r="8" fill="#FDBCB4" />
        
        {/* Floating code symbols */}
        <text x="80" y="100" fontSize="20" fill="hsl(var(--primary))" opacity="0.6">&lt;/&gt;</text>
        <text x="250" y="140" fontSize="16" fill="hsl(var(--chart-2))" opacity="0.6">{`{}`}</text>
        <text x="60" y="180" fontSize="14" fill="hsl(var(--chart-3))" opacity="0.6">( )</text>
        <text x="270" y="200" fontSize="18" fill="hsl(var(--chart-4))" opacity="0.6">[ ]</text>
      </svg>
    </div>
  );
}
