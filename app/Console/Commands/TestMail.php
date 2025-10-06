<?php

namespace App\Console\Commands;

use App\Mail\ContactFormSubmitted;
use App\Models\Contact;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TestMail extends Command
{
    protected $signature = 'mail:test';
    protected $description = 'Test mail configuration';

    public function handle()
    {
        $this->info('Testing mail configuration...');

        // Test basic mail config
        $this->info('MAIL_MAILER: ' . config('mail.default'));
        $this->info('MAIL_HOST: ' . config('mail.mailers.smtp.host'));
        $this->info('MAIL_PORT: ' . config('mail.mailers.smtp.port'));
        $this->info('MAIL_FROM: ' . config('mail.from.address'));
        $this->info('ADMIN_EMAIL: ' . env('ADMIN_EMAIL'));

        try {
            // Send test email
            $this->info('Sending test email...');

            // Create fake contact for testing
            $testContact = Contact::create([
                'name' => 'Test User',
                'email' => 'test@example.com',
                'phone' => '1234567890',
                'company' => 'Test Company',
                'services' => 'Testing',
                'message' => 'This is a test message',
                'country' => 'Test Country',
                'city' => 'Test City',
                'ip_address' => '127.0.0.1',
                'user_agent' => 'Test Agent'
            ]);

            Mail::to(env('ADMIN_EMAIL'))->send(new ContactFormSubmitted($testContact));

            $this->info('✓ Test email sent successfully!');

        } catch (\Exception $e) {
            $this->error('✗ Mail test failed: ' . $e->getMessage());
            $this->error('Stack trace:');
            $this->error($e->getTraceAsString());
        }
    }
}
