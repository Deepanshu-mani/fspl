
export default function Logo() {
    return <>
        <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center shadow-[0_0_20px_rgba(12,200,168,0.4)]">
                <div className="w-3 h-3 bg-white rounded-full rotate-45" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">aps</span>
        </div>
    </>
}