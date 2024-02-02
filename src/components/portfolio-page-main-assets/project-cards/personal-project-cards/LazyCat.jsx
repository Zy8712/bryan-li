import PreviewImage from '../../../../assets/project-previews/personal-project-previews/lazycat-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function LazyCat() {
    return (
        <>
            <UltimateProjectCard
                name="Lazy Cat"
                date="Last Updated: Febuary 1st, 2024 [Active]"
                previewImage={PreviewImage}
                githubrepo="https://github.com/Zy8712/RandomMiniWebProjects/tree/main/LazyCat"
                websitepreview="https://lazy-cat.vercel.app/"
                frontendmentorTF={false}
                challengeInfo=""
                htmlTF={true}
                cssTF={true}
                javascriptTF={true}
                sassTF={false}
                reactTF={true}
                tailwindTF={true}
                bootstrapTF={false}
                jsonTF={false}
                apiTF={true}
                figmaTF={false}
                nextjsTF={false}
                typescriptTF={false}
                reduxTF={false}
                postgresqlTF={false}
            />
        </>
    );
};

export default LazyCat;