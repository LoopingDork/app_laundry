<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tb_paket extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_outlet',
        'jenis',
        'nama_paket',
        'harga'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
