import React from 'react';
import Card from '../components/Card';
import z from '../images/z.png';
import mz from '../images/mz.png';
import github from '../images/github.png';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Mike Zlotkowski',
                    subTitle: 'Michael.Zlotkowski@gmail.com',
                    subTitle1: '(602)370-6110',
                    subTitle2: 'LinkedIN',
                    imgSrc: mz,
                    link: 'https://www.linkedin.com/in/mike-zlotkowski/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'MIKEZLOT.com',
                    subTitle: 'WordPress Development',
                    subTitle1: 'Example Site',
                    imgSrc: z,
                    link: 'https://mikezlot.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'GitHub Profile',
                    subTitle: 'All My Most Recent Commits',
                    imgSrc: github,
                    link: 'https://github.com/MikeyZ89',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <div fluid={true}>
                <div className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </div>
            </div>
        );
    }

}

export default Carousel;