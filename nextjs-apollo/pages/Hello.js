import apolloClient from "../lib/hello-client";
import { gql } from "@apollo/client";

function HelloPage(props) {
  const locations = props.locations;

  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Default export is required for Fast Refresh
export default HelloPage;

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  });

  return {
    props: {
      locations: data.locations,
    },
  };
}
