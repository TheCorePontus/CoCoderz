const ProblemDescription = () => {
	return (
		<div className='bg-white'>
			{/* TAB */}

			<div className='flex px-0 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg  font-medium pt-2'>1. Two Sum</div>
						</div>
						{/* Problem Statement(paragraphs) */}
						<div className=' text-sm'>
							<p className='mt-3'>
								Given an array of integers <code>nums</code> and an integer <code>target</code>, return
								<em>indices of the two numbers such that they add up to</em> <code>target</code>.
							</p>
							<p className='mt-3'>
								You may assume that each input would have <strong>exactly one solution</strong>, and you
								may not use thesame element twice.
							</p>
							<p className='mt-3'>You can return the answer in any order.</p>
						</div>

						{/* Examples */}
						<div className='mt-4 '>
							{/* Example 1 */}
							<div className="text-black">
								<p className='font-medium  '>Example 1: </p>
								<div className='example-card'>
									<pre>
										<strong className=''>Input: </strong> nums = [2,7,11,15], target = 9{" "}
										<br />
										<strong>Output:</strong> [0,1] <br />
										<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
									</pre>
								</div>
							</div>

							{/* Example 2 */}
							<div>
								<p className='font-medium  '>Example 2: </p>
								<div className='example-card'>
									<pre>
										<strong className=''>Input: </strong> nums = [3,2,4], target = 6{" "}
										<br />
										<strong>Output:</strong> [1,2] <br />
										<strong>Explanation:</strong> Because nums[1] + nums[2] == 6, we return [1, 2].
									</pre>
								</div>
							</div>
							{/* Example 3 */}
							<div>
								<p className='font-medium  '>Example 3: </p>
								<div className='example-card '>
									<pre>
										<strong className=''>Input: </strong> nums = [3,3], target = 6
										<br />
										<strong>Output:</strong> [0,1] <br />
									</pre>
								</div>
							</div>
						</div>

						{/* Constraints */}
						<div className='my-5'>
							<div className=' text-sm font-medium'>Constraints:</div>
							<ul className=' ml-5 list-disc'>
								<li className='mt-2'>
									<code className="text-black">2 ≤ nums.length ≤ 10</code>
								</li>

								<li className='mt-2'>
									<code className="text-black">-10 ≤ nums[i] ≤ 10</code>
								</li>
								<li className='mt-2'>
									<code className="text-black">-10 ≤ target ≤ 10</code>
								</li>
								<li className='mt-2 text-sm'>
									<strong>Only one valid answer exists.</strong>
								</li>
							</ul>
						</div>
            </div>
				</div>
			</div>
		</div>
	);
};
export default ProblemDescription;