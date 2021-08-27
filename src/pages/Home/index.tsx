import { FC } from 'react';
import Surface from '../../components/Surface';
import BaseLayout from '../../layouts/Base';

const HomePage: FC = () => (
  <BaseLayout>
    <Surface depth="0">Surface Depth 0</Surface>
    <Surface depth="1">Surface Depth 1 (Default)</Surface>
    <Surface depth="2">Surface Depth 2</Surface>
    <Surface depth="3">Surface Depth 3</Surface>
    <Surface depth="4">Surface Depth 4</Surface>
    <Surface depth="6">Surface Depth 6</Surface>
    <Surface depth="8">Surface Depth 8</Surface>
    <Surface depth="12">Surface Depth 12</Surface>
    <Surface depth="16">Surface Depth 16</Surface>
    <Surface depth="24">Surface Depth 24</Surface>
    <Surface emphasis="highest">Surface Emphasis Highest</Surface>
    <Surface emphasis="high">Surface Emphasis High (Default)</Surface>
    <Surface emphasis="medium">Surface Emphasis Medium</Surface>
    <Surface emphasis="disabled">Surface Emphasis Disabled</Surface>
  </BaseLayout>
);
export default HomePage;
