import React, { useState } from "react";
import { Button, Htag, Input, Paragraph, Rating, Tag, TextArea } from "../components";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interfaces";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>

      <Button appearance='primary' arrow='right'>
        Кнопка
      </Button>
      <Button appearance='ghost' arrow='down'>
        Кнопка
      </Button>

      <Paragraph size='s18'>
        Большой
      </Paragraph>
      <Paragraph size='s16'>
        Сдений
      </Paragraph>
      <Paragraph size='s14'>
        Маленький
      </Paragraph>

      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>

      <Rating rating={rating} isEditable setRating={setRating} />

      <Input placeholder='Имя'/>

      <TextArea placeholder='Текст отызва'/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
        menu,
        firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}