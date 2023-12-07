import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { githubURLAuth } from "@/utils/githubURLAuth";
import { googleURLAuth } from "@/utils/googleURLAuth";
import { Button } from "@/components/Button";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
	const router = useRouter()
  const { isAuthenticated } = useAuth()


	function handleSocialLogin(key: string) {
		if(key === "google") {
			router.push(googleURLAuth())
		} else {
			router.push(githubURLAuth())
		}
	};

	useEffect(() => {
    // Verifica se o usuário está autenticado
    if (isAuthenticated) {
      router.push('/to-do'); // Redireciona para a página de /to-do se já estiver autenticado
    }
  }, [isAuthenticated, router]);

	return (
		<div className="bg-dark h-screen p-8 flex flex-col items-center justify-center">
			<div className="bg-gray-200 p-8 rounded shadow-md max-w-md w-full">
				<h1 className="text-6xl font-semibold mb-6 text-center text-black">Login</h1>
				<p className="font-semibold mb-6 text-center text-black">Escolha uma maneira de fazer login</p>
					<Button 
						icon={<FcGoogle size={32} className="mx-2" />} 
						text="Google" 
						className="bg-white px-8 py-4 rounded-lg mt-8 w-full flex items-center justify-center text-black"
						onClick={() => handleSocialLogin("google")}
					/>

					<Button 
						icon={<FaGithub size={32} className="mx-2" />} 
						text="Github" 
						className="bg-github px-8 py-4 rounded-lg mt-8 w-full flex items-center justify-center"
						onClick={() => handleSocialLogin("github")}
					/>
			</div>
		</div>
	);
}