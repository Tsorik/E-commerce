<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Products;

class ProductController extends AbstractController
{
    /**
     * @Route("/api/product/{id}", name="product")
     */
    public function index($id)
    {
        $repository = $this->getDoctrine()->getRepository(Products::class);
        $products = $repository->findBy(['id' => $id]);
    
         $ProductArray = array();
         foreach ($products as $product) {
             $ProductArray[] = array(
                                        'id' => $product->getId(),
                                        'title' => $product->getTitle(),
                                        'description' => $product->getDescription(),
                                        'desclong' => $product->getDesclong(),
                                        'picture' => $product->getPicture(),
                                        'note' => $product->getScore(),
                                        'price' => $product->getPrice(),
                                     );
         }        
        return new JsonResponse($ProductArray);
    }
}
