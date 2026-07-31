import CV from '../pdf/Eugene_Krokhmal_CV.pdf';

const STOP_CODES = [
    {
        code: '0x00000050',
        name: 'PAGE_FAULT_IN_NONPAGED_AREA',
        module: 'portfolio.exe',
    },
    {
        code: '0x000000E2',
        name: 'ERR_TOO_MANY_STAR_BULLETS',
        module: 'experience.dll',
    },
    {
        code: '0x000000DE',
        name: 'CRT_OVERLOAD_EXCEPTION',
        module: 'crt-overlay.sys',
    },
    {
        code: '0x000000CV',
        name: 'CV_PDF_NOT_FOUND',
        module: 'contact.exe',
    },
];

const BSOD = () => {
    const stop =
        STOP_CODES[Math.floor(Math.random() * STOP_CODES.length)];
    const param = () =>
        `0x${Math.floor(Math.random() * 0xffffffff)
            .toString(16)
            .toUpperCase()
            .padStart(8, '0')}`;

    return (
        <div
            className="bsod-overlay"
            role="alert"
            aria-live="assertive"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.preventDefault()}
        >
            <div className="bsod-screen">
                <p className="bsod-lead">
                    A problem has been detected and Windows has been shut down to
                    prevent damage to your computer.
                </p>

                <p className="bsod-stop-name">{stop.name}</p>

                <p className="bsod-body">
                    If this is the first time you&apos;ve seen this stop error screen,
                    restart your computer. If this screen appears again, follow these
                    steps:
                </p>

                <p className="bsod-body">
                    Check to make sure any new hardware or software is properly
                    installed. If this is a new installation, ask your hardware or
                    software manufacturer for any Windows updates you might need.
                </p>

                <p className="bsod-body">
                    If problems continue, disable or remove any newly installed hardware
                    or software. Disable BIOS memory options such as caching or
                    shadowing. If you need to use Safe Mode to remove or disable
                    components, restart your computer, press F8 to select Advanced
                    Startup Options, and then select Safe Mode.
                </p>

                <p className="bsod-tech-label">Technical information:</p>

                <p className="bsod-tech">
                    *** STOP: {stop.code} ({param()}, {param()}, {param()},{' '}
                    {param()})
                </p>

                <p className="bsod-tech">
                    *** {stop.module} - Address {param().slice(2)} base at{' '}
                    {param().slice(2, 6)}0000, DateStamp 3d6dd67c
                </p>

                <p className="bsod-hint">Reload the page to continue.</p>
                <a
                    href={CV}
                    download="Eugene_Krokhmal_CV.pdf"
                    className="bsod-cv-link"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default BSOD;
