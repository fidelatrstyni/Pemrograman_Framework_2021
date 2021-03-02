import React from "react";

const mahasiswaPost = (props) => {
    return(
        <div className="mahasiswa">
                    <div className="gambar-mahasiswa">
                        <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
                    </div>
                    <div className="konten-mahasiswa">
                        <div className="nim">{props.nim}</div>
                        <p className="nama">{props.nama}</p>
                        <p className="alamat">{props.alamat}</p>
                        <p className="telfon">{props.telfon}</p>
                        <p>
                        <button className="angkatan btn btn-sm btn-primary">{props.angkatan}</button>
                        <button className="status btn btn-sm btn-success" style={{marginLeft: '5px'}}>{props.status}</button></p>
                        <button className="btn btn-sm btn-warning" onClick={() =>props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
                    </div>
                </div>
    )
}
export default mahasiswaPost;