import {
    LayoutGrid, Layers, ScanLine, CalendarClock, BellRing, SlidersHorizontal, Headphones,
    Search, Filter, Columns, Plus, ChevronRight, ChevronLeft, ChevronDown,
    X, Eye, EyeClosed, Star, RefreshCw, Clock, Bug, Map, FlaskConical,
    Check, FileText, ShieldAlert, AlertTriangle, Dot, Home, LucideIcon,
    Radar, ShieldCheck, ClipboardList, LayoutPanelTop
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    dashboard: LayoutGrid,
    projects: Layers,
    scans: ScanLine,
    schedule: CalendarClock,
    notifications: BellRing,
    settings: SlidersHorizontal,
    support: Headphones,
    search: Search,
    filter: Filter,
    columns: Columns,
    plus: Plus,
    chevronRight: ChevronRight,
    chevronLeft: ChevronLeft,
    chevronDown: ChevronDown,
    x: X,
    eye: Eye,
    eyeOff: EyeClosed,
    star: Star,
    refresh: RefreshCw,
    clock: Clock,
    spider: Bug,
    map: Map,
    flask: FlaskConical,
    check: Check,
    file: FileText,
    critical: ShieldAlert,
    warning: AlertTriangle,
    magnify: Search,
    dot: Dot,
    home: Home,
    radar: Radar,
    shieldCheck: ShieldCheck,
    clipboard: ClipboardList,
    layoutPanel: LayoutPanelTop,
};

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    fill?: string;
}

export default function Icon({ name, size = 16, color = "currentColor", fill = "none" }: IconProps) {
    const LucideIconComponent = iconMap[name];

    if (!LucideIconComponent) {
        console.warn(`Icon ${name} not found in iconMap`);
        return null; // Or a fallback icon
    }

    return <LucideIconComponent size={size} color={color} fill={fill} strokeWidth={2} />;
}
