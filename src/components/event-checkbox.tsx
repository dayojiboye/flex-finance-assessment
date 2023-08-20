import React from "react";
import CircleIcon from "../../assets/circle.svg";
import CheckmarkIcon from "../../assets/checkmark.svg";
import { SvgProps } from "react-native-svg";

type Props = {
	isChecked: boolean;
	width?: number;
	height?: number;
} & SvgProps;

export default function EventCheckbox({ isChecked, width = 18, height = 18, ...rest }: Props) {
	return isChecked ? (
		<CheckmarkIcon width={width} height={height} {...rest} />
	) : (
		<CircleIcon width={width} height={height} {...rest} />
	);
}
