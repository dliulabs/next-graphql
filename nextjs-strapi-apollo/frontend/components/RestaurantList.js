import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Button, Card, CardBody, CardColumns, CardImg, CardSubtitle } from 'reactstrap';
import { CardText, CardTitle, Col, Row } from 'reactstrap';

const QUERY = gql`
  query GetAllRestaurants {
    restaurants {
      data {
        id
        attributes {
          name
          description
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function RestaurantList(props) {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return (
      <h2>
        <Link href="#loading" aria-hidden="true" className="aal_anchor" id="loading">
          <svg
            aria-hidden="true"
            className="aal_svg"
            height="16"
            version="1.1"
            viewBox="0 0 16 16"
            width="16">
            <path
              fillRule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
          </svg>
        </Link>
        Loading...
      </h2>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log('Loading ... ');
  const restaurants = data?.restaurants?.data;

  if (!restaurants || restaurants.length === 0) return <h1>No Restaurants Found</h1>;

  return (
    <Row>
      {restaurants.map((res) => (
        <Col xs="6" sm="4" key={res.id}>
          <Card style={{ margin: '0 0.5rem 20px 0.5rem' }}>
            <CardImg
              top={true}
              style={{ height: 250 }}
              src={`${process.env.NEXT_PUBLIC_API_URL}${res.attributes.image.data.attributes.url}`}
            />
            <CardBody>
              <CardTitle>{res.attributes.name}</CardTitle>
              <CardText>{res.attributes.description}</CardText>
            </CardBody>
            <div className="card-footer">
              <Link key={`${res.id}`} href={`/restaurants/${res.id}`} className="btn btn-primary">
                View
              </Link>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
