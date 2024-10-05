function SignIn() {
	return (
	  <div className="min-h-screen bg-custom-gradient flex items-center justify-center p-4">
		<div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
		  <div className="text-center">
			<h1 className="text-4xl font-bold text-[rgba(9,9,121,1)] mb-4">Sign In</h1>
			<p className="text-gray-600 mb-6">
			  Welcome back, Duelist! Log in to continue your Yu-Gi-Oh! adventure.
			</p>
		  </div>
		  <form className="flex flex-col space-y-4">
			<div>
			  <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
				Email
			  </label>
			  <input
				type="email"
				id="email"
				name="email"
				className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(9,9,121,1)]"
				placeholder="Enter your email"
			  />
			</div>
  
			<div>
			  <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
				Password
			  </label>
			  <input
				type="password"
				id="password"
				name="password"
				className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(9,9,121,1)]"
				placeholder="Enter your password"
			  />
			</div>
  
			<button
			  type="submit"
			  className="bg-[rgba(9,9,121,1)] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
			>
			  Sign In
			</button>
		  </form>
  
		  <p className="text-center text-gray-600 mt-6">
			Don't have an account?{' '}
			<a href="/signup" className="text-[rgba(9,9,121,1)] hover:text-blue-800 font-bold">
			  Sign Up
			</a>
		  </p>
		</div>
	  </div>
	);
  }
  
  export default SignIn;
  