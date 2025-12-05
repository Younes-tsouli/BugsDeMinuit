'use client';
import React, { useState } from 'react';


const diaryPages = [
    { id: 1, title: 'Page 1', date: '15 Juin' },
    { id: 2, title: 'Page 2', date: '22 Septembre' },
    { id: 3, title: 'Page 3', date: '10 Janvier' },
    { id: 4, title: 'Page 4', date: '14 Avril' },
    { id: 5, title: 'Page 5', date: '20 Mai' },
    { id: 6, title: 'Page 6', date: '3 Octobre' },
    { id: 7, title: 'Page 7', date: '12 Décembre' },
];
<div className="space-y-3">
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <p className="font-medium mb-2">💡 Astuce :</p>
        <p>Essayez de rechercher &quot;drive&quot; pour accéder à vos fichiers</p>
    </div>
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-purple-800">
        <p className="font-medium mb-2">📷 Nouveau :</p>
        <p>Recherchez &quot;instagrom&quot; ou &quot;martin.kil&quot;</p>
    </div>
</div>

const pageContents: { [key: number]: { title: string; content: React.ReactElement } } = {
    1: {
        title: 'Page 1 — 15 Juin',
        content: (
            <>
                <span className="text-red-600 font-bold">L&apos;été de ma vie.</span> Je n&apos;ai jamais été aussi heureuse, j&apos;ai l&apos;impression de flotter.
                {'\n\n'}
                La soirée d&apos;anniversaire de Marc était incroyable, on a dansé jusqu&apos;à 4h du matin sur la plage.
                {'\n\n'}
                Julien m&apos;a regardée toute la soirée comme si j&apos;étais la seule fille au monde, il m&apos;a dit qu&apos;il m&apos;aimait pour la première fois.
                {'\n\n'}
                Au boulot, tout roule, je viens de boucler le projet Alpha et mon équipe m&apos;adore.
                {'\n\n'}
                J&apos;ai l&apos;impression que rien ne peut m&apos;arriver, je suis <span className="text-red-600 font-bold">invincible</span>.
                {'\n\n'}
                La vie est belle, bordel.
            </>
        )
    },
    2: {
        title: 'Page 2 — 22 Septembre',
        content: (
            <>
                Un petit nuage gris. L&apos;ambiance a changé au bureau depuis la rentrée, je ne sais pas trop pourquoi.
                {'\n\n'}
                Il y a des <span className="text-red-600 font-bold">silences</span> quand j&apos;entre dans la salle de pause, des regards en coin.
                {'\n\n'}
                Sophie, ma collègue &quot;amie&quot;, ne m&apos;a pas invitée au déjeuner ce midi.
                {'\n\n'}
                Julien dit que je suis parano, que je suis juste fatiguée. Il a sûrement raison, je me mets trop la pression.
                {'\n\n'}
                Ce soir, on sort au resto, je vais mettre ma robe rouge et oublier ces bêtises.
                {'\n\n'}
                Il faut que j&apos;arrête de me faire des films.
            </>
        )
    },
    3: {
        title: 'Page 3 — 10 Janvier',
        content: (
            <>
                <span className="text-red-600 font-bold">La fissure.</span>
                {'\n\n'}
                Je n&apos;ai pas dit à Julien pour le mail anonyme que j&apos;ai reçu hier. &quot;Tout le monde sait que tu es une imposture&quot;.
                {'\n\n'}
                J&apos;ai eu tellement honte que je l&apos;ai effacé tout de suite.
                {'\n\n'}
                Ce soir, quand mes amis proposaient un week-end au ski, je n&apos;arrivais pas à sourire. J&apos;avais l&apos;impression d&apos;avoir <span className="text-red-600 font-bold">&quot;VICTIME&quot;</span> écrit sur le front.
                {'\n\n'}
                J&apos;ai prétexté une migraine pour rentrer tôt. Je ne veux pas qu&apos;ils voient que je faiblis.
                {'\n\n'}
                Je dois garder la face, je suis forte, non ?
            </>
        )
    },
    4: {
        title: 'Page 4 — 14 Avril',
        content: (
            <>
                Le masque pèse lourd. Je commence à éviter les soirées.
                {'\n\n'}
                J&apos;ai dit à Julien que j&apos;avais trop de travail, mais la vérité, c&apos;est que je n&apos;ai plus la force de faire semblant d&apos;être joyeuse.
                {'\n\n'}
                Au bureau, on a renversé du café sur mes dossiers importants &quot;par accident&quot;. J&apos;ai nettoyé sans rien dire, les larmes aux yeux, pendant qu&apos;ils ricanaient.
                {'\n\n'}
                Je me sens <span className="text-red-600 font-bold">sale, humiliée</span>.
                {'\n\n'}
                Je ne peux pas en parler à Julien, il me trouverait pathétique de me laisser faire.
                {'\n\n'}
                Je préfère m&apos;isoler que d&apos;affronter son regard déçu.
            </>
        )
    },
    5: {
        title: 'Page 5 — 20 Mai',
        content: (
            <>
                <span className="text-red-600 font-bold">La rupture.</span> C&apos;est fait. J&apos;ai quitté Julien.
                {'\n\n'}
                C&apos;était la chose la plus dure de ma vie. Je lui ai dit que je ne l&apos;aimais plus, que j&apos;avais besoin d&apos;air.
                {'\n\n'}
                C&apos;est faux, je l&apos;aime à en crever, mais je suis devenue une <span className="text-red-600 font-bold">ombre toxique</span>.
                {'\n\n'}
                Je ne veux pas qu&apos;il voie la femme brisée que je deviens, celle qui se fait harceler et qui n&apos;a pas le courage de répondre.
                {'\n\n'}
                Il pleurait, il ne comprenait pas. J&apos;ai fermé la porte sur lui et je me suis effondrée.
                {'\n\n'}
                Je suis seule maintenant. C&apos;est mieux pour lui.
            </>
        )
    },
    6: {
        title: 'Page 6 — 3 Octobre',
        content: (
            <>
                <span className="text-red-600 font-bold">Invisible.</span>
                {'\n\n'}
                Je ne suis pas sortie de chez moi depuis quatre jours, sauf pour acheter des pâtes.
                {'\n\n'}
                J&apos;ai croisé une ancienne amie dans la rue, j&apos;ai baissé la tête et j&apos;ai changé de trottoir, le cœur battant à tout rompre.
                {'\n\n'}
                J&apos;avais honte de mes cheveux gras, de mes cernes, de ma lâcheté.
                {'\n\n'}
                Je ne réponds plus au téléphone. Je passe mes journées à fixer le mur, en repensant à tout ce que j&apos;ai raté.
                {'\n\n'}
                Les messages de haine continuent parfois, je ne les lis même plus, je les mérite sûrement.
            </>
        )
    },
    7: {
        title: 'Page 7 — 12 Décembre',
        content: (
            <div>
                <span className="text-red-600 font-bold">Le néant.</span>
                {'\n\n'}
                Il fait nuit à 16h, ça me va bien. L&apos;appartement est en désordre, comme ma tête.
                {'\n\n'}
                Je ne sais plus qui j&apos;étais avant, cette fille qui riait sur la plage me semble être une étrangère morte depuis des siècles.
                {'\n\n'}
                Je n&apos;ai plus honte, je n&apos;ai plus mal, je ne suis plus rien.
                {'\n\n'}
                Je suis juste un corps vide qui attend que le temps passe.
                {'\n\n'}
                Le silence est mon seul ami maintenant. Je vais me recoucher, à quoi bon rester debout ?
                {'\n\n'}
                {'\n'}
                <span className="text-gray-500 text-sm italic">
                    P.S. : J&apos;ai sauvegardé quelques photos de ma vie d&apos;avant sur mon{' '}
                    <span
                        className="hover:text-blue-500 cursor-default relative group"
                        title="Essayez de rechercher 'drive' dans le navigateur..."
                    >
                        Drive personnel
                        {/*<span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">*/}
                        {/*    💡 Cherchez &quot;drive&quot; dans le navigateur*/}
                        {/*</span>*/}
                    </span>
                    {' '}mais je ne peux plus les regarder...
                </span>
            </div>
        )
    },
};

export default function DiaryApp() {
    const [selectedPage, setSelectedPage] = useState<number | null>(null);


    if (selectedPage) {
        const page = pageContents[selectedPage];
        return (
            <div
                className="h-full flex justify-center overflow-y-auto overflow-x-hidden pt-5"
                style={{
                    background: '#b5a487',
                    margin: 0,
                    padding: '20px 0'
                }}
            >
                <div
                    className="w-[380px] max-w-full relative"
                    style={{
                        minHeight: '90vh',
                        backgroundColor: '#f5e4c4',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03 0.05' numOctaves='3' result='noise'/%3E%3CfeDiffuseLighting in='noise' lighting-color='%23d9c088' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.7'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: 'inset 0 0 100px rgba(88, 56, 30, 0.25), 0 8px 30px rgba(0,0,0,0.4)',
                        padding: '25px',
                        borderRadius: '4px',
                        color: '#2b1d0e',
                        fontFamily: 'Georgia, serif'
                    }}
                >
                    {/* Back Button */}
                    <button
                        onClick={() => setSelectedPage(null)}
                        className="absolute hover:scale-110 transition-transform z-10"
                        style={{
                            width: '40px',
                            height: '40px',
                            background: '#e3d3b0',
                            borderRadius: '50%',
                            left: '15px',
                            top: '15px',
                            boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                    >
                        <div
                            style={{
                                borderStyle: 'solid',
                                borderWidth: '8px 14px 8px 0',
                                borderColor: 'transparent #3e2723 transparent transparent',
                                marginRight: '3px'
                            }}
                        />
                    </button>

                    {/* Page Header */}
                    <div
                        className="text-center font-bold mb-4"
                        style={{ fontSize: '20px' }}
                    >
                        {page.title}
                    </div>

                    {/* Diary Text */}
                    <div
                        className="whitespace-pre-line"
                        style={{
                            fontSize: '17px',
                            lineHeight: '1.8',
                            padding: '10px 5px'
                        }}
                    >
                        {page.content}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="h-full overflow-auto"
            style={{
                background: '#b5a487',
                padding: '20px'
            }}
        >
            <div style={{ fontFamily: 'Georgia, serif', color: '#2b1d0e' }}>
                <h1 className="text-5xl text-center mb-4" style={{ fontWeight: 'bold' }}>
                    Journal Intime
                </h1>
                <div className="text-center text-lg mb-10" style={{ color: '#4a3728' }}>
                    Une collection de mes expériences, pensées et secrets.
                </div>

                <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                    {diaryPages.map((page) => (
                        <button
                            key={page.id}
                            onClick={() => setSelectedPage(page.id)}
                            className="w-full h-80 bg-cover bg-center p-5 flex flex-col justify-center items-center cursor-pointer rounded-lg shadow-lg transition-transform hover:scale-105"
                            style={{
                                backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg)',
                                border: '2px solid #8b7355',
                                color: '#2b1d0e'
                            }}
                        >
                            <div
                                className="text-2xl mb-3 px-4 py-2 rounded"
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    background: 'rgba(243, 228, 196, 0.9)',
                                    fontWeight: 'bold'
                                }}
                            >
                                {page.title}
                            </div>
                            <div
                                className="text-lg px-3 py-1 rounded"
                                style={{ background: 'rgba(227, 211, 176, 0.85)' }}
                            >
                                {page.date}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

