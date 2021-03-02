import React, {Component} from "react";
import './Mahasiswa.css';
import MahasiswaPost from "../../component/BlogPost/MahasiswaPost";

class mahasiswa extends Component{
    state = {
        listMahasiswa:[],
        insertMahasiswa: {
            userId: 1,
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            telfon:"",
            angkatan:"",
            status:""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch(`http://localhost:3001/posts?_sort=id&_order=desc`)
            .then(response => response.json())
            .then(jsonHasilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/posts/${data}`,{method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahMahasiswa = (event) =>{
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts',{
            method: 'POST',
            headers: {
                'Accept': 'applicarion/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    }

    render(){
        return(
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row" style={{marginTop: '15px'}}>
                        <label htmlFor="nim" className="col-sm-2 col-form-label" >NIM :</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahMahasiswa}/>
                        </div>
                        <label htmlFor="nama" className="col-sm-1 col-form-label" style={{marginLeft: '5px'}}>Nama :</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat :</label>
                        <div className="col-sm-8">
                            <textarea className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan :</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/>
                        </div>
                        <label htmlFor="status" className="col-sm-1 col-form-label">Status :</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                       
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2 style={{textAlign: 'center', marginTop: '20px', marginBottom: '50px'}}>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <MahasiswaPost key={mahasiswa.id} nim={mahasiswa.nim} 
                        nama={mahasiswa.nama} alamat={mahasiswa.alamat} telfon={mahasiswa.telfon} 
                        angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id}
                        hapusMahasiswa={this.handleHapusMahasiswa}/>
                    })
                }
            </div>
        )
    }
}

export default mahasiswa;