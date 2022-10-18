import { Container, VStack } from '@chakra-ui/react'

import { TypeChildren } from '../../utils/interfaces'

export default function Layout({ children }: TypeChildren) {
  return (
    <Container h='100%' maxW={['100%', '75%']} py='10' px='0' bg='teal.100'>
      <VStack w='100%' h='100vh'>
        {children}
      </VStack>
    </Container>
  )
}
