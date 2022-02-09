/** 
 * Redirects user to the accounts page
 * @returns 
*/

export default function Home() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/account',
    }
  }
}
