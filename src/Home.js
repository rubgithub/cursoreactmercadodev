import React, { Component } from 'react'

import AnuncioHome from './AnuncioHome'
import LinkCategoria from './LinkCategoria'
import HeaderHomme from './HeaderHome'

import base from './base'

class Home extends Component{
	constructor(props){
		super(props)

		this.state = {
			anuncios: []
		}		

		base.bindToState('anuncios',{
			context: this,
			state: 'anuncios',
			queries: {
				limitToLast: 3
			}
		})
	}

	render(){
		let index = 0	
		return(
			<div>
				<HeaderHomme/>						
				<div className="container">
					<h3>Últimos Anúncios</h3>
					<div className="row">
						{this.state.anuncios.length === 0 &&
							(<div className="loadersmall"></div>)
						}
						{Object.keys(this.state.anuncios).map((key) => {
							const anuncio = this.state.anuncios[key]
							return(
								<AnuncioHome key={key} anuncio={anuncio}/>		
							)
						})}
					</div>
					<h3>Categorias</h3>
					<div className="row">
						{this.props.categorias.length === 0 &&
							(<div className="loadersmall"></div>)
						}
						{this.props.categorias.map((cat, indice) =>{
							return[
								<LinkCategoria key={indice} categoria={cat}/>,
								++index%4 === 0 && <div key={'c'+indice} className="w-100"/>								
							]
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Home