import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | DevLearn',
    description: 'Learn more about DevLearn.',
};

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="text-4xl font-bold">About DevLearn</h1>

            <p className="mt-6 leading-8 text-slate-600">
                DevLearn is a learning platform focused on practical software
                development.
            </p>
        </main>
    );
}
