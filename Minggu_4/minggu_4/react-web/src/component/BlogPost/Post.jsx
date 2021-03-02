import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeImg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
            </div>
        </div>

    )
    /*
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeImg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
            </div>
        </div>

    )*/
    /*return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeImg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">Judul Artikel</div>
                <p className="isi-artikel">Isi Artikel</p>
            </div>
        </div>

    )*/
}
export default Post;