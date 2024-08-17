import "./ArtistGrid.css";
import zimmermannImgPath from "../assets/artist-images/zimmermann.jpg";
import boysImgPath from "../assets/artist-images/06boys.jpg";
import metsImgPath from "../assets/artist-images/themets.png";

export default function ArtistsGrid() {
    interface ArtistCardProps {
        imagePath: string;
        name: string;
        dateTime: string;
    }
    const ArtistCard: React.FC<ArtistCardProps> = ({
        imagePath,
        name,
        dateTime,
    }) => {
        return (
            <div
                className="artist-card"
                style={
                    {
                        "--background-image": `url(${imagePath})`,
                    } as React.CSSProperties
                }
            >
                <h1>{name}</h1>
                <h2>{dateTime}</h2>
            </div>
        );
    };
    return (
        <div className="grid-container">
            <ArtistCard
                imagePath={zimmermannImgPath}
                name="Zimmermann"
                dateTime="onsdag 21. august"
            />
            <ArtistCard
                imagePath={metsImgPath}
                name="The Mets"
                dateTime="onsdag 21. august"
            />
            <ArtistCard
                imagePath={boysImgPath}
                name="06 Boys"
                dateTime="onsdag 21. august"
            />
        </div>
    );
}
