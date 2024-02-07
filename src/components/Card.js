import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
 
  return (
    <VStack backgroundColor={"white"}  borderRadius={10} overflow="hidden">
      <Image src={imageSrc}  borderBottomRadius={10} width="100%"/>
      <VStack px={3} py={2} alignItems={"flex-start"} >
      <Heading color="black">{title}</Heading>
      <Text color="grey">{description}</Text>
      <HStack color={"black"}><a>See More</a> <FontAwesomeIcon icon={faArrowRight} size="1x"/></HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
