import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{

    /*state = {
        listArtikel:[]
    }*/

    state = {
        listArtikel :[],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(jsonHasilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilDariAPI
                })
            })
    }
    componentDidMount() {
        this.ambilDataDariServerAPI()
        
        /*
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(jsonHasilDariAPI => {
            this.setState({
                listArtikel: jsonHasilDariAPI
            })
        })*/
        
        /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(jsonHasilDariAPI => {
            this.setState({
                listArtikel: jsonHasilDariAPI
            })
        })*/
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`,{method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    /*
    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`,{method:`DELETE`})
        .then( res => {
            this.ambilDataDariServerAPI()
        })
    }*/

    handleTambahArtikel = (event) =>{
        let formInsertArtikel = {...this.state.formInsertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () =>{
        fetch('http://localhost:3001/posts',{
            method:'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    }
    
    render(){
        return(
            <div class="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="form-group row">
                            <input type="text" className="form-control" name="title" id="title" rows="3" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="form-group row">
                            <textarea className="form-control" name="body" id="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>

                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel=>{
                        return <Post key={artikel.id} judul={artikel.title} 
                        isi={artikel.body} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
                
            </div>
        )

    /*render(){
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} 
                        idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )*/
    /*render(){
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                    })
                }
            </div>
        )*/

        /* return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang" />
            </div>
        )*/
        /*
        return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post />
            </div>
        ) */
        /*
        return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                <div class="artikel">
                    <div class="gambar-artikel">
                        <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
                    </div>
                    <div class="konten-artikel">
                        <div class="judul-artikel">Judul Artikel</div>
                        <p class="isi-artikel">Isi Artikel</p>
                    </div>
                </div>
            </div>
        )
        */
    }
}

export default BlogPost;