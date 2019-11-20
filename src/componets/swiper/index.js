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
        this.index=null
    }

    componentDidMount(){
        this.autoPlay()
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    // 自动轮播
    autoPlay(){
        this.timer = setInterval(()=>{
            if(this.aData && this.aData.length>0){
                this.isInit = false
                for(let i=0;i<this.aData.length;i++){
                    if(this.aData[i].active){
                        this.aData[i].active = false
                        break
                    }
                }
            }

            if(this.index>=this.aData.length-1){
                this.index = 0
            }else{
                this.index++
            }
            this.aData[this.index].active = true
            this.setState({data: this.aData})
        }, 3000)
    }

    // 改变图片
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

    stop(){
        clearInterval(this.timer)
    }

    render(){
        this.aData = this.props.data;
        if(this.aData && this.aData.length>0 && this.isInit){
            for(let i=0;i<this.aData.length;i++){
                if (i===0) {
                    this.aData[i].active = true
                }else{
                    this.aData[i].active = false
                }
            }
        }

        return(
            <div className="my-swiper-main" onMouseOver={this.stop.bind(this)} onMouseOut={this.autoPlay.bind(this)}>
                {
                    (this.aData && this.aData.length>0) && this.aData.map((item, index)=>{
                        return (
                            <div className={item.active ? "my-slide show" : "my-slide"} key={index}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.image} alt="" /></a>
                            </div>
                        )
                    })
                }
                <div className="pagination">
                    {
                        (this.aData && this.aData.length>0) && this.aData.map((item,index) => {
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