<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tb_member extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_pengguna',
        'alamat',
        'jenis_kelamin',
        'tlp'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
