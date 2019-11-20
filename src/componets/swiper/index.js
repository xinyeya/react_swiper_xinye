import React, {Component} from "react"
import PropTypes from "prop-types"
import "./index.css"

export default class Swiper extends Component{
    constructor(){
        super()
        this.state = {
            data: []
        }
        this.aData = []
        this.isInit=true
    }

    componentDidMount(){
        setTimeout(()=>{
            console.log(this.props.data)
        })
    }

    changeImage(index){
        this.isInit=false
        if(this.aData.length>0){
            for(let i=0;i<this.aData.length;i++){
                if(this.aData[i].active){
                    this.aData[i].active = false
                    break
                }
            }
        }
        this.aData[index].active = true
        this.setState({
            data: this.aData
        })
    }

    render(){
        this.aData = this.props.data;
        if(this.aData.length>0 && this.isInit){
            for(let i=0;i<this.aData.length;i++){
                if (i===0) {
                    this.aData[i].active = true
                }else{
                    this.aData[i].active = false
                }
            }
        }

        return(
            <div className="my-swiper-main">
                {
                    this.aData.length>0 && this.aData.map((item, index)=>{
                        return (
                            <div className={item.active ? "my-slide show" : "my-slide"} key={index}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.image} alt="" /></a>
                            </div>
                        )
                    })
                }
                <div className="pagination">
                    {
                        this.aData.length>0 && this.aData.map((item,index) => {
                            return (
                                <div className={item.active?"dot active":"dot"} key={index} onClick={this.changeImage.bind(this,index)}></div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

Swiper.propTypes = {
    data: PropTypes.array.isRequired
}