import '../../../../public/styles/loader.css';

export default function SnippetLoading(){
return (

    <div className='flex justify-center align-middle items-center mt-80' >
   <div className="loader">
	<div className="loader-inner">
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
	</div>
</div>
    </div>
)
}