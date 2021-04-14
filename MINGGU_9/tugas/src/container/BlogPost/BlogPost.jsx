import { Component } from "react";
import "./BlogPost.css";
import Post from "../../component/BlogPost/Post";
import API from "../../services/index";

class BlogPost extends Component {
  state = {
    listMahasiswa: [], 
    insertMahasiswa: {
      id: "", 
      nim: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: "",
    },
  };

  ambilDataDariServerAPI() {
    API.getBioMhs().then((result) => {
      this.setState({
        listMahasiswa: result,
      });
    });
  }

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleHapusMahasiswa = (data) => {
    API.deleteBioMhs(data);
    this.ambilDataDariServerAPI();
  };

  handleTambahMahasiswa = (event) => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime(); 
    formInsertMahasiswa["id"] = timestamp;
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa,
    });
  };

  handleTombolSimpan = () => {
    API.postBioMhs(this.state.insertMahasiswa).then((response) => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div className="post-mahasiswa">
        <h2>Input Data Mahasiswa</h2>
        <div className="form pb-2 border-bottom">
          <div className="form-group row">
            <label htmlFor="nim" className="col-sm-2 col-form-label">
              NIM
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nim"
                name="nim"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              Alamat
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="alamat"
                name="alamat"
                rows="3"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="hp" className="col-sm-2 col-form-label">
              HP
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="hp"
                name="hp"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="angkatan" className="col-sm-2 col-form-label">
              Angkatan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="angkatan"
                name="angkatan"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="status" className="col-sm-2 col-form-label">
              Status
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="status"
                name="status"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2>Daftar Mahasiswa</h2>
        {this.state.listMahasiswa.map((mahasiswa) => {
          return (
            <Post
              key={mahasiswa.id}
              nama={mahasiswa.nama}
              alamat={mahasiswa.alamat}
              hp={mahasiswa.hp}
              angkatan={mahasiswa.angkatan}
              status={mahasiswa.status}
              nimMahasiswa={mahasiswa.nim}
              idMahasiswa={mahasiswa.id}
              hapusMahasiswa={this.handleHapusMahasiswa}
            />
          ); 
        })}
      </div>
    );
  }
}
export default BlogPost;
