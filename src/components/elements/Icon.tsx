type Props = {
	src: string;
	alt?: string
}
const Icon = ({src, alt}: Props) => {
	return (
		<div className='image'>
			<img src={src} alt={alt}/>
		</div>
	);
};

export default Icon;