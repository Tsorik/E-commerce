<?php

namespace App\Controller;

use dump;
use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\User\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class UserController extends AbstractController
{
     /**
     * @Route("/api/user/signup", name="register", methods={"POST"})
     */
    public function register(Request $request, EntityManagerInterface $manager)
    {
        
        $user = new Users();
        $data = json_decode($request->getContent());
        
        $user->setFirstName($data->{'First_name'});
        $user->setLastName($data->{'Last_name'});
        $user->setPicture($data->{'Picture'});
        $user->setPhone($data->{'Phone'});
        $user->setEmail($data->{'Email'});
        $user->setAnniversary(\DateTime::createFromFormat('Y-m-d', $data->{'Anniversary'}));
        $user->setPassword(password_hash($data->{'Password'}, PASSWORD_DEFAULT));
        $user->setAdress($data->{'Adress'});
        $user->setState($data->{'State'});
        $user->setPostal($data->{'Code_zip'});
        $user->setCountry($data->{'From'});
        $user->setAdmin(false);
      
        $manager->persist($user);
        $manager->flush();

        return new JsonResponse([
            'success_message' => 'Thank you for registering'
        ]);
    }

     /**
     * @Route("/api/user/login", name="login", methods={"POST"})
     */
    public function login(Request $request, EntityManagerInterface $manager)
    {
        $data = json_decode($request->getContent());
        
        $user = $this->getDoctrine()
        ->getRepository(Users::class)
        ->find($data->{'Email'});
         dump($user);
        $password = password_hash($data->{'Password'}, PASSWORD_DEFAULT);
        
        return new JsonResponse([
            $data->{'Email'}
        ]);
       
    }
}
