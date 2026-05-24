package com.bankai.bank_statement_analyzer.service;

import com.bankai.bank_statement_analyzer.entity.User;
import org.springframework.stereotype.Service;

@Service
public class SessionService {

    private User currentUser;

    public void setCurrentUser(User user) {
        this.currentUser = user;
    }

    public User getCurrentUser() {
        return currentUser;
    }

    public void clear() {
        this.currentUser = null;
    }
}