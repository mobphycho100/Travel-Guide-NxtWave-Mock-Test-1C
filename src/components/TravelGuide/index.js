import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelItem from '../TravelItem'
import {
  BgContainer,
  MainContainer,
  Heading,
  LoaderContainer,
} from './styledComponents'

class TravelGuide extends Component {
  state = {
    travelList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTravelList()
  }

  getTravelList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))

      this.setState({travelList: updatedData, isLoading: false})
    }
  }

  renderLoader = () => (
    <LoaderContainer>
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    </LoaderContainer>
  )

  render() {
    const {travelList, isLoading} = this.state
    return (
      <>
        <BgContainer>
          <Heading>Travel Guide</Heading>
          <MainContainer>
            {isLoading
              ? this.renderLoader()
              : travelList.map(each => (
                  <TravelItem key={each.id} data={each} />
                ))}
          </MainContainer>
        </BgContainer>
      </>
    )
  }
}

export default TravelGuide
