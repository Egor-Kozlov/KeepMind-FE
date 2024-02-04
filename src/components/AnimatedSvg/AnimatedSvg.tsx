import {Animated} from 'react-native';
import {
  Circle as CircleComponent,
  Ellipse as EllipseComponent,
  G as GComponent,
  Line as LineComponent,
  Path as PathComponent,
  Polygon as PolygonComponent,
  Polyline as PolylineComponent,
  Rect as RectComponent,
  Svg as SvgComponent,
} from 'react-native-svg';

export const Svg = Animated.createAnimatedComponent(SvgComponent);
export const G = Animated.createAnimatedComponent(GComponent);
export const Path = Animated.createAnimatedComponent(PathComponent);
export const Line = Animated.createAnimatedComponent(LineComponent);
export const Polyline = Animated.createAnimatedComponent(PolylineComponent);
export const Rect = Animated.createAnimatedComponent(RectComponent);
export const Polygon = Animated.createAnimatedComponent(PolygonComponent);
export const Circle = Animated.createAnimatedComponent(CircleComponent);
export const Ellipse = Animated.createAnimatedComponent(EllipseComponent);
