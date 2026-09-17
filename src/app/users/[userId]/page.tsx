import type { User } from "../page";

interface UserDetailsPageProps{
    params: Promise<{userId: string}>
}
const UserDetailsPage = async ({ params }: UserDetailsPageProps) => {
    const {userId} = await params;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
    ); 
    const user: User = await res.json();
    if (!user) return <div>Not Found</div>
    const {
        id,
        name,
        username,
        email,
        address: {
            street,
            suite,
            city,
            zipcode,
            geo: { lat, lng },
        },
        phone,
        website,
        company: { name: catchPhrase, bs },
    } = user;
    return (
        <div className="py-12">
            {user && (
                <div className="w-full mx-auto max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="relative h-28 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div className="absolute -bottom-12 left-6 flex items-end gap-4">
                            {/* Avatar */}
                            <div className="w-24 h-24 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-400 flex items-center justify-center text-white text-3xl font-bold border-4 border-white/20 shadow-xl">
                                {name
                                    .split(' ')
                                    .map((n) => n[0])
                                    .join('')
                                    .slice(0, 2)
                                    .toUpperCase()}
                            </div>

                            <div className="pb-2">
                                <h1 className="text-2xl font-bold text-white tracking-tight">
                                    {name}
                                </h1>
                                <p className="text-white/70 text-sm font-medium">
                                    @{username}
                                </p>
                                <span className="inline-block mt-1.5 px-3 py-0.5 text-xs font-semibold bg-white/15 text-indigo-100 rounded-full">
                                    ID #{id}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="pt-16 px-6 pb-6 space-y-6">
                        {/* Contact */}
                        <div>
                            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                                Contact
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                                        📧
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${email}`}
                                            className="text-sm text-indigo-300 hover:text-indigo-200 font-medium"
                                        >
                                            {email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                                        📱
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">
                                            Phone
                                        </p>
                                        <p className="text-sm text-white font-medium">
                                            {phone}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                                        🌐
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">
                                            Website
                                        </p>
                                        <a
                                            href={`https://${website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-indigo-300 hover:text-indigo-200 font-medium"
                                        >
                                            {website}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                                Address
                            </h3>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0">
                                    📍
                                </div>
                                <div>
                                    <p className="text-sm text-white font-medium leading-relaxed">
                                        {street}, {suite}
                                        <br />
                                        {city}, {zipcode}
                                    </p>
                                </div>
                            </div>

                            {/* Geo */}
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                                    <p className="text-xs text-white/50 mb-0.5">
                                        Latitude
                                    </p>
                                    <p className="text-sm font-semibold text-indigo-300">
                                        {lat}
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                                    <p className="text-xs text-white/50 mb-0.5">
                                        Longitude
                                    </p>
                                    <p className="text-sm font-semibold text-indigo-300">
                                        {lng}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                                Company
                            </h3>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                <p className="text-base font-semibold text-white mb-1">
                                    {name}
                                </p>
                                <p className="text-sm text-white/70 italic mb-2">
                                    “{catchPhrase}”
                                </p>
                                <p className="text-xs text-white/50">
                                    {bs}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-white/5 text-center">
                        <p className="text-xs text-white/30">
                            JSONPlaceholder • Pro Profile Card
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetailsPage;