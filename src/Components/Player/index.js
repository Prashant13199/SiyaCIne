export default function Player({ title, url }) {
    return <iframe title={title} allowFullScreen style={{ width: "100%", height: "100%" }} src={url}></iframe>
}
