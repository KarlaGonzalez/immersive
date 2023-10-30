// INTERFACE

  export interface ProductModel {
    // Tabs template
    id: number;
    title: string;
    content: string;
    videoUrl: string;
    videoCaption: string;
    homepage: string;

    // Summary template
    feature1: string;
    feature2: string;
    feature3: string;
    featureVal1: string;
    featureVal2: string;
    featureVal3: string;
    helpTopics: Array<string>,

    //Stories template
    headline: string,
    storiesDescription: string,
    video1: string,
    cardTitle1: string,
    cardDescription1: string,
    video2: string,
    cardTitle2: string,
    cardDescription2: string,
    video3: string,
    cardTitle3: string,
    cardDescription3: string

    // Footer links info missing!
  }
  