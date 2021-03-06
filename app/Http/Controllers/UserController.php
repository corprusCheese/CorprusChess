<?php

namespace App\Http\Controllers;

use App\Repository\UserRepositoryInterface;

class UserController extends Controller {
    private UserRepositoryInterface $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index($id)
    {
        if ($id) {
            $user = $this->userRepository->find($id);
        } else {
            $user = null;
        }

        return view('pages.profile', [
            'user' => $user
        ]);
    }
}
