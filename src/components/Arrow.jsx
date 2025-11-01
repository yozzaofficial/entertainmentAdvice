export default function Arrow({dir,clickHandler,ref}){
    return (
        <div className={dir=="right" ? "arrowRightContainer" : "arrowLeftContainer"}>
            <span className={dir=="right" ? "arrowRight arrows":"arrowLeft arrows"} onClick={clickHandler}></span>
        </div>
    )
}
// css in Home.css