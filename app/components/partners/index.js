import Section from '../../components/common/section'
import { styles, mediaQueries } from '../../constants'
import partners from '../../data/partners'
import Partner from './partner'

const renderPartners = () => {
  return partners.map((partner, index) => <Partner {...partner} key={index} />)
}

const Partners = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div>
      <h2>and Partners</h2>
      <p>
        Who give us a helping hand for our mission to go smoothly:
      </p>
      <ul>
        {renderPartners()}
      </ul>
    </div>

    <style jsx>{`
      div {
        padding: 100px 0 0;
      }

      h2 {
        text-align: center;
        font-size: 54px;
        color: ${styles.mainColor2};
        font-weight: 700;
        margin: 0 auto 30px;
      }

      p {
        margin: 0 0 10px;
        font-size: 18px;
        color: ${styles.mainColor7};
        line-height: 32px;
        font-weight: 300;
        text-align: center;
      }

      ul {
        margin-top: 35px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        border-bottom: 1px dotted gray;
      }
      
      @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
        div {
          padding: 90px 0 0;
        }
        
        h2 {
          font-size: 46px;
        }
        
        p {
          font-size: 17px;
          line-height: 30px;
        }
      }
      
      @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
        div {
          padding: 70px 0 0;
        }
        
        h2 {
          font-size: 43px;
        }
        
        p {
          font-size: 18px;
          line-height: 32px;
        }
      }

      @media only screen and (max-width: ${mediaQueries.S}) {
        div {
          padding: 80px 0 0;
        }
        
        h2 {
          font-size: 33px;
        }
        
        p {
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 20px;
        }
      }
      
      .mail-to {
        text-transform: none;
        color: ${styles.mainColor1};
        font-weight: 800;
      }
    `}</style>
  </Section>
)

module.exports = Partners
